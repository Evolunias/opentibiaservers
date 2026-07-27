import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-chile');
}

export default function WithReviewsServersChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-chile" />;
}
