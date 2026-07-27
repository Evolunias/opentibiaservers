import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-chile');
}

export default function AureraGlobalWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-chile" />;
}
