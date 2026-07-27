import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-download');
}

export default function Tibia11WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-download" />;
}
