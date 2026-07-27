import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-argentina');
}

export default function WithReviewsReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-argentina" />;
}
