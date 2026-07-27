import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-south-america');
}

export default function CanobWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-south-america" />;
}
