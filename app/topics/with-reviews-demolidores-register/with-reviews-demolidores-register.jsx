import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-register');
}

export default function WithReviewsDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-register" />;
}
