import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-sweden');
}

export default function WithReviewsReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-sweden" />;
}
