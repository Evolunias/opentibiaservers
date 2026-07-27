import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-login');
}

export default function WithReviewsCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-login" />;
}
