import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-reviews-download');
}

export default function Tibia96WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-reviews-download" />;
}
