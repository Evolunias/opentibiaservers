import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-south-america');
}

export default function RealMapReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-south-america" />;
}
