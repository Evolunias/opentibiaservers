import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-chile');
}

export default function MarolaotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-chile" />;
}
