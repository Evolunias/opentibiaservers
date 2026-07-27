import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-chile');
}

export default function RealMapGuideChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-chile" />;
}
