import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-guide');
}

export default function WithReviewsCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-guide" />;
}
