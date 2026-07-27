import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-guide');
}

export default function WithReviewsClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-guide" />;
}
