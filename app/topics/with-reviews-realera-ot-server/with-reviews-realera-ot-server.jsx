import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-ot-server');
}

export default function WithReviewsRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-ot-server" />;
}
