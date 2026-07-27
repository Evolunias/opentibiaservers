import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-poland');
}

export default function EvoleraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-poland" />;
}
