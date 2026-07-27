import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-uk');
}

export default function RubinotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-uk" />;
}
