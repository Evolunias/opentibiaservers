import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-reviews-download');
}

export default function Tibia13WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-reviews-download" />;
}
