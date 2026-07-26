import SeoServerIndex from '@/app/components/SeoServerIndex';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { fetchServersByField } from '@/lib/directory-data';

export const revalidate = 1800;

function label(value) {
  return decodeURIComponent(String(value || '')).replace(/-/g, '.');
}

export async function generateMetadata({ params }) {
  const version = label(params.version);
  const title = `${version} Open Tibia Servers | OT Server List`;
  const description = `Browse active Open Tibia servers for Tibia client ${version}, including live player counts, rates, PvP type, locations, and uptime data.`;

  return {
    title,
    description,
    alternates: {
      canonical: buildAbsoluteUrl(`/servers/client/${params.version}`),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(`/servers/client/${params.version}`),
      siteName: getSiteName(),
      type: 'website',
    },
  };
}

export default async function ClientVersionServersPage({ params }) {
  const version = label(params.version);
  const servers = await fetchServersByField('version', version, 100);

  return (
    <SeoServerIndex
      title={`${version} Open Tibia Servers`}
      description={`Find Open Tibia servers running client ${version}. Compare live players, rates, PvP type, location, and uptime before choosing a server to play.`}
      servers={servers}
    />
  );
}
