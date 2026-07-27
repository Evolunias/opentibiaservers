import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-reviews-download');
}

export default function Tibia12WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-reviews-download" />;
}
