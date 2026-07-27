import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-reviews-download');
}

export default function Tibia854WithReviewsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-reviews-download" />;
}
