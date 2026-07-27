import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-guide');
}

export default function WithReviewsThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-guide" />;
}
