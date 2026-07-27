import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-reviews-download');
}

export default function Tibia71WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-reviews-download" />;
}
