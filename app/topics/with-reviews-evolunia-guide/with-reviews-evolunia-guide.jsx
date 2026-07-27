import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-guide');
}

export default function WithReviewsEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-guide" />;
}
