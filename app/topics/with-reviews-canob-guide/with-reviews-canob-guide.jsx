import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-guide');
}

export default function WithReviewsCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-guide" />;
}
