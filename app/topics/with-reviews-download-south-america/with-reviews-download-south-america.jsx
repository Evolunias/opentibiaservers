import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-south-america');
}

export default function WithReviewsDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-south-america" />;
}
