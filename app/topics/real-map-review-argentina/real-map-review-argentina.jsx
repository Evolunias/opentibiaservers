import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-argentina');
}

export default function RealMapReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-argentina" />;
}
