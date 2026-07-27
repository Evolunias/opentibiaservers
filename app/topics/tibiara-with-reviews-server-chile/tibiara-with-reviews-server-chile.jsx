import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-chile');
}

export default function TibiaraWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-chile" />;
}
