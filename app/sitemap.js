import { buildAbsoluteUrl } from '@/lib/seo';
import { getSupabaseServerClient } from '@/lib/supabase-server';
import { getServerPath } from '@/lib/server-paths';

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
  ];

  const supabase = getSupabaseServerClient();
  if (!supabase) return staticUrls;

  const { data } = await supabase
    .from('servers')
    .select('id,slug,updated_at,last_seen_at')
    .order('updated_at', { ascending: false })
    .limit(5000);

  const serverUrls = (data || []).map((server) => ({
    url: buildAbsoluteUrl(getServerPath(server)),
    lastModified: server.updated_at || server.last_seen_at || new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.9,
  }));

  return [...staticUrls, ...serverUrls];
}
