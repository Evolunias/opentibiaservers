import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-germany');
}

export default function RubinotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-germany" />;
}
