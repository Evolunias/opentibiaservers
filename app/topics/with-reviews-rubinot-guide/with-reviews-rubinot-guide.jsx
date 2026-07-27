import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-guide');
}

export default function WithReviewsRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-guide" />;
}
