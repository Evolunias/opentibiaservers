import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-guide');
}

export default function WithReviewsOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-guide" />;
}
