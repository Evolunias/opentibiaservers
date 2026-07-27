import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-north-america');
}

export default function TibiaraWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-north-america" />;
}
