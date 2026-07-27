import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-guide');
}

export default function WithReviewsMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-guide" />;
}
