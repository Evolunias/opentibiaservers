import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-chile');
}

export default function EvoleraPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-chile" />;
}
