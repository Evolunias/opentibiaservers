import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores');
}

export default function WithReviewsDemolidoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores" />;
}
