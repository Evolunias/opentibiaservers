import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-chile');
}

export default function EvoleraNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-chile" />;
}
