import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-usa');
}

export default function RealMapReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-usa" />;
}
