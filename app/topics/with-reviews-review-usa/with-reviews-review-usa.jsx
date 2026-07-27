import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-usa');
}

export default function WithReviewsReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-usa" />;
}
