import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-chile');
}

export default function DuraOnlineWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-chile" />;
}
