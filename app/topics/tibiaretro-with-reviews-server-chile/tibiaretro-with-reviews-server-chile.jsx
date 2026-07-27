import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-chile');
}

export default function TibiaretroWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-chile" />;
}
