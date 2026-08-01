import { buildAbsoluteUrl } from '@/lib/seo';
import { getSupabaseServerClient } from '@/lib/supabase-server';
import { getServerPath, slugifyServerName } from '@/lib/server-paths';
import { getCuratedPages } from '@/lib/curated-pages';
import { getIndexableKeywordPages } from '@/lib/keyword-pages';
import { getOtServerCuratedPages } from '@/lib/otserver-curated-pages';
import { getOtlandServerGalaPages } from '@/lib/otland-server-gala-pages';
import { getResourcePages } from '@/lib/resource-pages';
import { topOtservlistServers } from '@/lib/top-otservlist-servers';
import { getTibiaWorldPages } from '@/lib/tibia-world-pages';
import { knowledgeEntities } from '@/lib/knowledge-base';

function isMissingColumn(error) {
  return error?.code === '42703' || /column .* does not exist/i.test(error?.message || '');
}

export default async function sitemap() {
  const staticUrls = [
    {
      url: buildAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: buildAbsoluteUrl('/community'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: buildAbsoluteUrl('/resources'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.82,
    },
    {
      url: buildAbsoluteUrl('/knowledge'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.78,
    },
  ];
  const curatedUrls = getCuratedPages().map((page) => ({
    url: buildAbsoluteUrl(page.path),
    lastModified: page.updatedAt,
    changeFrequency: 'weekly',
    priority: page.slug === 'antica' ? 0.85 : 0.8,
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
  const knowledgeUrls = knowledgeEntities.map((entity) => ({
    url: buildAbsoluteUrl(entity.canonicalPath),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.72,
  }));
  const generatedOtServerUrls = getOtServerCuratedPages().map((page) => ({
    url: buildAbsoluteUrl(page.path),
    lastModified: page.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.82,
  }));
  const otlandServerGalaUrls = getOtlandServerGalaPages().map((server) => ({
    url: buildAbsoluteUrl(`/${server.slug}`),
    lastModified: server.updated_at || new Date(),
    changeFrequency: 'weekly',
    priority: 0.78,
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
    priority: server.source_rank <= 25 ? 0.88 : 0.82,
  }));
  const seededExactMatchUrls = topOtservlistServers.map((server) => ({
    url: buildAbsoluteUrl(`/${server.slug}`),
    lastModified: server.updated_at || new Date(),
    changeFrequency: 'hourly',
    priority: server.source_rank <= 25 ? 0.9 : 0.84,
  }));

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    const seenUrls = new Set();
    return [...staticUrls, ...curatedUrls, ...generatedOtServerUrls, ...otlandServerGalaUrls, ...tibiaWorldUrls, ...resourceUrls, ...knowledgeUrls, ...keywordUrls, ...seededExactMatchUrls, ...seededServerUrls].filter((entry) => {
      if (seenUrls.has(entry.url)) return false;
      seenUrls.add(entry.url);
      return true;
    });
  }

  let { data, error } = await supabase
    .from('servers')
    .select('id,slug,updated_at,last_seen_at')
    .order('updated_at', { ascending: false })
    .limit(5000);

  if (error && isMissingColumn(error)) {
    const fallback = await supabase
      .from('servers')
      .select('id,name,ip,updated_at,last_check')
      .order('players_online', { ascending: false, nullsFirst: false })
      .limit(5000);
    data = fallback.data || [];
  }

  const serverUrls = (data || []).map((server) => ({
    url: buildAbsoluteUrl(getServerPath(server)),
    lastModified: server.updated_at || server.last_seen_at || new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.9,
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

  const seenUrls = new Set();
  return [...staticUrls, ...curatedUrls, ...generatedOtServerUrls, ...otlandServerGalaUrls, ...tibiaWorldUrls, ...resourceUrls, ...knowledgeUrls, ...keywordUrls, ...facetUrls, ...seededExactMatchUrls, ...seededServerUrls, ...serverUrls].filter((entry) => {
    if (seenUrls.has(entry.url)) return false;
    seenUrls.add(entry.url);
    return true;
  });
}
