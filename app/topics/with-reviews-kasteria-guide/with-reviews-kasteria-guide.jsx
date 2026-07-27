import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-guide');
}

export default function WithReviewsKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-guide" />;
}
