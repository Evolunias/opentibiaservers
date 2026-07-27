import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-chile');
}

export default function EvoluniaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-chile" />;
}
