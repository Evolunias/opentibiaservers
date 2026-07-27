import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-download');
}

export default function WithReviewsArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-download" />;
}
