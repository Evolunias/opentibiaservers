import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-brazil');
}

export default function RealMapReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-brazil" />;
}
