import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvpe-server-chile');
}

export default function EvoleraPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvpe-server-chile" />;
}
