import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-register');
}

export default function WithReviewsCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-register" />;
}
