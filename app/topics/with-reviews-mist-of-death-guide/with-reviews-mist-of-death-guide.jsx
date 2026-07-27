import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-guide');
}

export default function WithReviewsMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-guide" />;
}
