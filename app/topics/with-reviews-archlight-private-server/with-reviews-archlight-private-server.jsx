import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-private-server');
}

export default function WithReviewsArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-private-server" />;
}
