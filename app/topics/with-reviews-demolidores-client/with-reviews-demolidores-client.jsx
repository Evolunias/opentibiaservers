import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-client');
}

export default function WithReviewsDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-client" />;
}
