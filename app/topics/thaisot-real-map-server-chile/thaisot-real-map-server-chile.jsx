import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-chile');
}

export default function ThaisotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-chile" />;
}
