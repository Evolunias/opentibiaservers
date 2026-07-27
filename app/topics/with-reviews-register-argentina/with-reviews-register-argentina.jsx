import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-argentina');
}

export default function WithReviewsRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-argentina" />;
}
