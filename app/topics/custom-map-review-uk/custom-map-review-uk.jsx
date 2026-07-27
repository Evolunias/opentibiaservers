import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-uk');
}

export default function CustomMapReviewUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-uk" />;
}
