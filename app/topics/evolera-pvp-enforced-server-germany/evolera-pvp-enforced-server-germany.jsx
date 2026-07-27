import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-germany');
}

export default function EvoleraPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-germany" />;
}
