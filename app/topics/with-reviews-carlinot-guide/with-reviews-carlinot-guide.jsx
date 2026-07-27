import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-guide');
}

export default function WithReviewsCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-guide" />;
}
