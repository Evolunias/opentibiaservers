import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-login');
}

export default function WithReviewsDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-login" />;
}
