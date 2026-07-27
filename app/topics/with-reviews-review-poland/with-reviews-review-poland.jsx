import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-poland');
}

export default function WithReviewsReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-poland" />;
}
