import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-chile');
}

export default function NostaltherWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-chile" />;
}
