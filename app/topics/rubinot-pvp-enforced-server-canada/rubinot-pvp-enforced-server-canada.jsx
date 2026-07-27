import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-canada');
}

export default function RubinotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-canada" />;
}
