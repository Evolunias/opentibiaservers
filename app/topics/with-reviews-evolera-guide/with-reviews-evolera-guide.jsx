import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-guide');
}

export default function WithReviewsEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-guide" />;
}
