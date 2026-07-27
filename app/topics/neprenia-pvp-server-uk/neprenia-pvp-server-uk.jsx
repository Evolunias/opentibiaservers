import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-uk');
}

export default function NepreniaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-uk" />;
}
