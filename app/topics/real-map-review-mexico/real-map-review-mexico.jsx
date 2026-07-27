import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-mexico');
}

export default function RealMapReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-mexico" />;
}
