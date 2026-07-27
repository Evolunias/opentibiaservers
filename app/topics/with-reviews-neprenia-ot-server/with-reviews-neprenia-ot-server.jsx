import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-ot-server');
}

export default function WithReviewsNepreniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-ot-server" />;
}
