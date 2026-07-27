import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-reviews-server-chile');
}

export default function SaintsotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-reviews-server-chile" />;
}
