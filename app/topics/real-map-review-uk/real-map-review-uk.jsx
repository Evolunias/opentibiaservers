import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-uk');
}

export default function RealMapReviewUkKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-uk" />;
}
