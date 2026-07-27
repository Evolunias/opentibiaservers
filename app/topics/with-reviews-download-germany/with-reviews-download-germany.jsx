import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-germany');
}

export default function WithReviewsDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-germany" />;
}
