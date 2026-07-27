import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-argentina');
}

export default function WithReviewsDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-argentina" />;
}
