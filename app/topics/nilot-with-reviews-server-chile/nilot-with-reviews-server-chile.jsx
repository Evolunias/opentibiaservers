import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-chile');
}

export default function NilotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-chile" />;
}
