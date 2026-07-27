import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-brazil');
}

export default function WithReviewsDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-brazil" />;
}
