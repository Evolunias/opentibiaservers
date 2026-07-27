import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-download');
}

export default function Tibia14WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-download" />;
}
