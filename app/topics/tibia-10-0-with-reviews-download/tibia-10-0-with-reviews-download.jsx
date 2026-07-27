import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-reviews-download');
}

export default function Tibia100WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-reviews-download" />;
}
