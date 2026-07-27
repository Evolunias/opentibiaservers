import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-server');
}

export default function WithReviewsArchlightServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-server" />;
}
