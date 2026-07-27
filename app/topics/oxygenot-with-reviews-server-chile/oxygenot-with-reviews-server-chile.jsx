import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-chile');
}

export default function OxygenotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-chile" />;
}
