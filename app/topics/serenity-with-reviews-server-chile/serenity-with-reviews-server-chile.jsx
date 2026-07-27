import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-chile');
}

export default function SerenityWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-chile" />;
}
