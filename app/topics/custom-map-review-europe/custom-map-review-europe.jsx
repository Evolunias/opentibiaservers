import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-review-europe');
}

export default function CustomMapReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-review-europe" />;
}
