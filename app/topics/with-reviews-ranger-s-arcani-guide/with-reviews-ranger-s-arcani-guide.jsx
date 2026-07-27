import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-guide');
}

export default function WithReviewsRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-guide" />;
}
