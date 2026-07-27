import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvp-enforced-server-germany');
}

export default function ThaisotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvp-enforced-server-germany" />;
}
