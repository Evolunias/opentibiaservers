import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-chile');
}

export default function TibiantisWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-chile" />;
}
