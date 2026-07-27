import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-download');
}

export default function WithReviewsRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-download" />;
}
