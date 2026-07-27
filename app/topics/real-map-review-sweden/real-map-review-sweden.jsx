import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-sweden');
}

export default function RealMapReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-sweden" />;
}
