import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-poland');
}

export default function WithReviewsDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-poland" />;
}
