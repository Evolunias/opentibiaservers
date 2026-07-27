import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-download');
}

export default function WithReviewsOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-download" />;
}
