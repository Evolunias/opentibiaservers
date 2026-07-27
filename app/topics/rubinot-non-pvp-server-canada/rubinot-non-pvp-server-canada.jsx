import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-canada');
}

export default function RubinotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-canada" />;
}
