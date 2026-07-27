import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-germany');
}

export default function RealMapReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-germany" />;
}
