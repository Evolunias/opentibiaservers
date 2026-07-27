import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-chile');
}

export default function ThorniaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-chile" />;
}
