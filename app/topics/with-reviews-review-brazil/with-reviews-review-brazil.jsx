import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-brazil');
}

export default function WithReviewsReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-brazil" />;
}
