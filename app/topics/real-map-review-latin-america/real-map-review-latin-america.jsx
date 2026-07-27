import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-latin-america');
}

export default function RealMapReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-latin-america" />;
}
