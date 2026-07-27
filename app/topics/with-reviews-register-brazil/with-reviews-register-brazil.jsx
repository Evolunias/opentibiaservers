import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-brazil');
}

export default function WithReviewsRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-brazil" />;
}
