import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-north-america');
}

export default function WithReviewsDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-north-america" />;
}
