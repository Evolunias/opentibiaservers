import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-canada');
}

export default function WithReviewsDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-canada" />;
}
