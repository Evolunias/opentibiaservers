import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-uk');
}

export default function TibiaraNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-uk" />;
}
