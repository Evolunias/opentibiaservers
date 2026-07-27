import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-guide');
}

export default function WithReviewsRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-guide" />;
}
