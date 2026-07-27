import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-usa');
}

export default function WithReviewsDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-usa" />;
}
