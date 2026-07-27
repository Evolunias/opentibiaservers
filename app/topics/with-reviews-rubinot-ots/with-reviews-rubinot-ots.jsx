import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-ots');
}

export default function WithReviewsRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-ots" />;
}
