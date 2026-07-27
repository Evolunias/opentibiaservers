import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-mexico');
}

export default function WithReviewsRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-mexico" />;
}
