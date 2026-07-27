import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-download');
}

export default function WithReviewsNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-download" />;
}
