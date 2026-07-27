import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-download-uk');
}

export default function WithReviewsDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-download-uk" />;
}
