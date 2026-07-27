import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-ot');
}

export default function WithReviewsRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-ot" />;
}
