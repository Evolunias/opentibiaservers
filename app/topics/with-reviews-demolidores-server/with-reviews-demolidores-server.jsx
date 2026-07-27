import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-server');
}

export default function WithReviewsDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-server" />;
}
