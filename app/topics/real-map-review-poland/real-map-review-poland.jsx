import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-poland');
}

export default function RealMapReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-poland" />;
}
