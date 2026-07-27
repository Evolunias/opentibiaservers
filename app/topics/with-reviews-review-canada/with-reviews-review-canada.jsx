import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-canada');
}

export default function WithReviewsReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-canada" />;
}
