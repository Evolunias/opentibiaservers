import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-uk');
}

export default function WithReviewsReviewUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-uk" />;
}
