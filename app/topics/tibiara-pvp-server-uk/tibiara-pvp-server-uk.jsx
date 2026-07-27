import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-uk');
}

export default function TibiaraPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-uk" />;
}
