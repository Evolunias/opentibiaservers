import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-usa');
}

export default function WithReviewsRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-usa" />;
}
