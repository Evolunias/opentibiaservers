import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-north-america');
}

export default function RealMapReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-north-america" />;
}
