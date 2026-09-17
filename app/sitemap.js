import { buildAbsoluteUrl } from '@/lib/seo';
import { getSupabaseServerClient } from '@/lib/supabase-server';
import { getServerPath, slugifyServerName } from '@/lib/server-paths';
import { getCuratedPages } from '@/lib/curated-pages';
import { getIndexableKeywordPages } from '@/lib/keyword-pages';
import { getServerReviewPages } from '@/lib/server-review-pages';
import { getResourcePages } from '@/lib/resource-pages';
import { topOtservlistServers } from '@/lib/top-otservlist-servers';
import { getTibiaWorldPages } from '@/lib/tibia-world-pages';
import { knowledgeEntities } from '@/lib/knowledge-base';
import { getKnowledgeCatalogSitemapEntries } from '@/lib/knowledge-catalog';
import { getStaticAppRoutes, getStaticServerNameRoutes } from '@/lib/static-app-routes';
import { listServerWikiSlugs } from '@/lib/server-wiki-markdown';

function isMissingColumn(error) {
  return error?.code === '42703' || /column .* does not exist/i.test(error?.message || '');
}

function dedupe(entries) {
  const seenUrls = new Set();
  return entries.filter((entry) => {
    if (!entry?.url || seenUrls.has(entry.url)) return false;
    seenUrls.add(entry.url);
    return true;
  });
}

export default async function sitemap() {
  const staticAppRoutes = getStaticAppRoutes();
  const wikiIndexUrl = {
    url: buildAbsoluteUrl('/wiki'),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  };
  const wikiPageUrls = listServerWikiSlugs().map((slug) => ({
    url: buildAbsoluteUrl(`/wiki/${slug}`),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  const filesystemServerUrls = getStaticServerNameRoutes().map((route) => ({
    url: buildAbsoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.95,
  }));

  const staticUrls = [
    {
      url: buildAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...staticAppRoutes
      .filter((route) => route.kind === 'section')
      .map((route) => ({
        url: buildAbsoluteUrl(route.path),
        lastModified: new Date(),
        changeFrequency: route.path === '/directory' || route.path === '/rankings' ? 'hourly' : 'weekly',
        priority: route.path === '/directory' ? 0.96 : route.path === '/rankings' ? 0.95 : route.path === '/evomanias' ? 0.92 : 0.8,
      })),
  ];

  const curatedUrls = getCuratedPages().map((page) => ({
    url: buildAbsoluteUrl(page.path),
    lastModified: page.updatedAt,
    changeFrequency: 'weekly',
    priority: page.type === 'server' ? 0.95 : page.slug === 'antica' ? 0.85 : 0.8,
  }));

  const tibiaWorldUrls = getTibiaWorldPages().map((page) => ({
    url: buildAbsoluteUrl(page.path),
    lastModified: page.updatedAt,
    changeFrequency: 'monthly',
    priority: page.slug.includes('world') ? 0.72 : 0.76,
  }));

  const resourceUrls = getResourcePages().map((page) => ({
    url: buildAbsoluteUrl(page.path),
    lastModified: page.updatedAt,
    changeFrequency: 'monthly',
    priority: page.type === 'resource' ? 0.74 : 0.7,
  }));

  const knowledgeUrls = knowledgeEntities.filter((entity) => entity.indexable).map((entity) => ({
    url: buildAbsoluteUrl(entity.canonicalPath),
    lastModified: entity.reviewedAt,
    changeFrequency: 'monthly',
    priority: ['mechanics', 'progression'].includes(entity.collection) ? 0.82 : 0.76,
  }));

  const knowledgeCatalogUrls = getKnowledgeCatalogSitemapEntries().map((entry) => ({
    url: buildAbsoluteUrl(entry.path),
    lastModified: entry.reviewedAt,
    changeFrequency: 'monthly',
    priority: entry.type === 'monsters' || entry.type === 'spells' ? 0.74 : 0.7,
  }));

  // Prefer exact-match /{slug} URLs for ranking on server names
  const serverReviewUrls = getServerReviewPages().map((server) => ({
    url: buildAbsoluteUrl(`/${server.slug}`),
    lastModified: server.updatedAt || server.updated_at || new Date(),
    changeFrequency: 'weekly',
    priority: 0.94,
  }));

  const keywordUrls = getIndexableKeywordPages(1000).map((page) => ({
    url: buildAbsoluteUrl(`/topics/${page.slug}`),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: Number(page.priority_score || 0) >= 90 ? 0.72 : 0.62,
  }));

  const seededServerUrls = topOtservlistServers.map((server) => ({
    url: buildAbsoluteUrl(getServerPath(server)),
    lastModified: server.updated_at || new Date(),
    changeFrequency: 'hourly',
    priority: server.source_rank <= 25 ? 0.93 : 0.9,
  }));

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return dedupe([
      ...staticUrls,
      ...[wikiIndexUrl],
      ...wikiPageUrls,
      ...filesystemServerUrls,
      ...curatedUrls,
      ...serverReviewUrls,
      ...tibiaWorldUrls,
      ...resourceUrls,
      ...knowledgeUrls,
      ...knowledgeCatalogUrls,
      ...keywordUrls,
      ...seededServerUrls,
    ]);
  }

  let { data, error } = await supabase
    .from('servers')
    .select('id,name,slug,canonical_slug,root_domain,host,ip,website_url,external_launch_url,location,version,updated_at,last_seen_at')
    .order('updated_at', { ascending: false })
    .limit(5000);

  if (error && isMissingColumn(error)) {
    const fallback = await supabase
      .from('servers')
      .select('id,name,slug,host,ip,website_url,external_launch_url,location,version,updated_at,last_check')
      .order('players_online', { ascending: false, nullsFirst: false })
      .limit(5000);
    data = fallback.data || [];
  }

  const serverUrls = (data || []).map((server) => ({
    url: buildAbsoluteUrl(getServerPath(server)),
    lastModified: server.updated_at || server.last_seen_at || new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.92,
  }));

  const countries = [...new Set((data || []).map((server) => server.location).filter(Boolean))];
  const versions = [...new Set((data || []).map((server) => server.version).filter(Boolean))];
  const facetUrls = [
    ...countries.map((country) => ({
      url: buildAbsoluteUrl(`/servers/country/${slugifyServerName(country)}`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    })),
    ...versions.map((version) => ({
      url: buildAbsoluteUrl(`/servers/client/${String(version).replace(/\./g, '-')}`),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    })),
  ];

  return dedupe([
    ...staticUrls,
    ...[wikiIndexUrl],
      ...wikiPageUrls,
      ...filesystemServerUrls,
    ...curatedUrls,
    ...serverReviewUrls,
    ...tibiaWorldUrls,
    ...resourceUrls,
    ...knowledgeUrls,
    ...knowledgeCatalogUrls,
    ...keywordUrls,
    ...facetUrls,
    ...seededServerUrls,
    ...serverUrls,
  ]);
}
