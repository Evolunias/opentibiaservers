import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-europe');
}

export default function WithReviewsDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-europe" />;
}
