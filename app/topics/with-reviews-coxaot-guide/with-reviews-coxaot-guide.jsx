import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-guide');
}

export default function WithReviewsCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-guide" />;
}
