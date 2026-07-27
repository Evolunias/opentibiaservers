import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-chile');
}

export default function CustomMapSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-chile" />;
}
