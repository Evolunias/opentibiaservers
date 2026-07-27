import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-register');
}

export default function WithReviewsRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-register" />;
}
