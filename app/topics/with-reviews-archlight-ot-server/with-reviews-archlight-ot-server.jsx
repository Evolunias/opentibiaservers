import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-ot-server');
}

export default function WithReviewsArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-ot-server" />;
}
