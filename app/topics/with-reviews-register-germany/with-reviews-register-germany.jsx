import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-germany');
}

export default function WithReviewsRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-germany" />;
}
