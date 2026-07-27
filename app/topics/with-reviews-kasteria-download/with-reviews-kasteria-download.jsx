import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-download');
}

export default function WithReviewsKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-download" />;
}
