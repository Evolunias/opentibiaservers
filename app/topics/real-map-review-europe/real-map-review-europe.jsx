import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-europe');
}

export default function RealMapReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-europe" />;
}
