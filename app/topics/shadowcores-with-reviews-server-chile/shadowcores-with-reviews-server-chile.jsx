import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-chile');
}

export default function ShadowcoresWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-chile" />;
}
