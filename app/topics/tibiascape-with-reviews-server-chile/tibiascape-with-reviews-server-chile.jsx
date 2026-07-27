import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-chile');
}

export default function TibiascapeWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-chile" />;
}
