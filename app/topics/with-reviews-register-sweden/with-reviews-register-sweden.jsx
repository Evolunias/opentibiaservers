import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-sweden');
}

export default function WithReviewsRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-sweden" />;
}
