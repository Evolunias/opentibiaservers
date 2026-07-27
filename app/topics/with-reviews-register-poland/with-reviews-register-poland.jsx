import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-poland');
}

export default function WithReviewsRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-poland" />;
}
