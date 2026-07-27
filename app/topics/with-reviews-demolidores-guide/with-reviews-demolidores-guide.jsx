import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-guide');
}

export default function WithReviewsDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-guide" />;
}
