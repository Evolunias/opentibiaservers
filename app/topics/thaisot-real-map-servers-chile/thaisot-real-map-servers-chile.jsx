import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-chile');
}

export default function ThaisotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-chile" />;
}
