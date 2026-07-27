import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-mexico');
}

export default function WithReviewsDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-mexico" />;
}
