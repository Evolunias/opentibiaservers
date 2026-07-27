import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-chile');
}

export default function EvoleraRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-chile" />;
}
