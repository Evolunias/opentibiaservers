import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-reviews-server-south-america');
}

export default function VenoreotWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-reviews-server-south-america" />;
}
