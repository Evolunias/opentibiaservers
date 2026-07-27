import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-login');
}

export default function WithReviewsRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-login" />;
}
