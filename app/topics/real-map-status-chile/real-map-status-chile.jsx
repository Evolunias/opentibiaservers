import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-status-chile');
}

export default function RealMapStatusChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-status-chile" />;
}
