import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-chile');
}

export default function RealMapSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-chile" />;
}
