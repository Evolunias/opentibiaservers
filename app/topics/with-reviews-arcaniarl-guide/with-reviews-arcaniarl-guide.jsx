import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-guide');
}

export default function WithReviewsArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-guide" />;
}
