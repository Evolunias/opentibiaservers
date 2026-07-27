import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-canada');
}

export default function WithReviewsRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-canada" />;
}
