import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-guide');
}

export default function WithReviewsMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-guide" />;
}
