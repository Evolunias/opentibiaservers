import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-review-mexico');
}

export default function WithReviewsReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-review-mexico" />;
}
