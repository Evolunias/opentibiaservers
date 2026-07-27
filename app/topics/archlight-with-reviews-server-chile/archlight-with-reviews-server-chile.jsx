import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-chile');
}

export default function ArchlightWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-chile" />;
}
