import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-guide');
}

export default function WithReviewsNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-guide" />;
}
