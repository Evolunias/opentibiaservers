import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-non-pvp-server-uk');
}

export default function TibiameNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-non-pvp-server-uk" />;
}
