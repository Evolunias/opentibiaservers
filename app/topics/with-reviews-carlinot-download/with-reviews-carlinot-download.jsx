import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-carlinot-download');
}

export default function WithReviewsCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-carlinot-download" />;
}
