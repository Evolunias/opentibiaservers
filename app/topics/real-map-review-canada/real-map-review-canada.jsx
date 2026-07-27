import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-canada');
}

export default function RealMapReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-canada" />;
}
