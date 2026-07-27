import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-chile');
}

export default function AlasteraWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-chile" />;
}
