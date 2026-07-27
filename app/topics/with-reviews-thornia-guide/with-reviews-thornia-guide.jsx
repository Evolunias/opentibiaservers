import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-guide');
}

export default function WithReviewsThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-guide" />;
}
