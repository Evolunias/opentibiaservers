import SeoServerIndex from '@/app/components/SeoServerIndex';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { fetchServersByField } from '@/lib/directory-data';

export const revalidate = 1800;

function label(value) {
  return decodeURIComponent(String(value || '')).replace(/-/g, ' ');
}

export async function generateMetadata({ params }) {
  const country = label(params.country);
  const title = `${country} Open Tibia Servers | OT Server List`;
  const description = `Find active ${country} Open Tibia servers with live players, client versions, PvP type, rates, and uptime data.`;

  return {
    title,
    description,
    alternates: {
      canonical: buildAbsoluteUrl(`/servers/country/${params.country}`),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(`/servers/country/${params.country}`),
      siteName: getSiteName(),
      type: 'website',
    },
  };
}

export default async function CountryServersPage({ params }) {
  const country = label(params.country);
  const servers = await fetchServersByField('location', country, 100);

  return (
    <SeoServerIndex
      title={`${country} Open Tibia Servers`}
      description={`Compare ${country} Open Tibia servers by live players, version, rates, PvP type, and uptime. These listings are synchronized from public server-list data and linked to detailed server pages.`}
      servers={servers}
    />
  );
}
