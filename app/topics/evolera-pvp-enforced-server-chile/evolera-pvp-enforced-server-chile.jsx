import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-chile');
}

export default function EvoleraPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-chile" />;
}
