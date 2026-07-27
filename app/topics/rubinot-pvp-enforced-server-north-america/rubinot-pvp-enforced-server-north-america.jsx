import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-north-america');
}

export default function RubinotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-north-america" />;
}
