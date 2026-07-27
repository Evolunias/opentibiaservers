import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-guide');
}

export default function WithReviewsNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-guide" />;
}
