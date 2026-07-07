import { createClient } from '@supabase/supabase-js';
import ServerDetailClient from './ServerDetailClient';
import {
  buildAbsoluteUrl,
  buildServerDescription,
  buildServerJsonLd,
  buildServerTitle,
  getSiteName,
  getSiteUrl,
  makeServerKeywordList,
} from '@/lib/seo';

function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function getServerRecord(id) {
  const supabase = getSupabaseServerClient();
  if (!supabase) return null;

  const { data } = await supabase
    .from('servers')
    .select('*')
    .eq('id', id)
    .single();

  return data || null;
}

export async function generateMetadata({ params }) {
  const server = await getServerRecord(params.id);
  const siteUrl = getSiteUrl();

  if (!server) {
    return {
      title: `Server Listing Not Found | ${getSiteName()}`,
      description: 'The requested Open Tibia server listing could not be found.',
      alternates: {
        canonical: `${siteUrl}/server/${params.id}`,
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const title = buildServerTitle(server);
  const description = buildServerDescription(server);
  const keywords = makeServerKeywordList(server);
  const canonical = buildAbsoluteUrl(`/server/${server.id}`);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: getSiteName(),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ServerPage({ params }) {
  const server = await getServerRecord(params.id);
  const jsonLd = server ? buildServerJsonLd(server) : null;

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <ServerDetailClient params={params} initialServer={server} />
    </>
  );
}
