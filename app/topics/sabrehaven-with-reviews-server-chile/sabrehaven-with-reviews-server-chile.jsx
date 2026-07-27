import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-chile');
}

export default function SabrehavenWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-chile" />;
}
