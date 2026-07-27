import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-europe');
}

export default function WithReviewsRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-europe" />;
}
