import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-south-america');
}

export default function RubinotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-south-america" />;
}
