import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-ot-server');
}

export default function WithReviewsRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-ot-server" />;
}
