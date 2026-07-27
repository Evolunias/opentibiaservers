import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-south-america');
}

export default function ThaisotWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-south-america" />;
}
