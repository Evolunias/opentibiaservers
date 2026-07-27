import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-chile');
}

export default function EvoleraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-chile" />;
}
