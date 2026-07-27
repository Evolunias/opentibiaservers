import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-chile');
}

export default function EvoleraRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-chile" />;
}
