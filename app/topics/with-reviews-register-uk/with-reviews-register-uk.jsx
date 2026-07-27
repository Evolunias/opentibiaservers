import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-uk');
}

export default function WithReviewsRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-uk" />;
}
