import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-south-america');
}

export default function TibiaraWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-south-america" />;
}
