import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-chile');
}

export default function LumineraWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-chile" />;
}
