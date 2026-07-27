import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-chile');
}

export default function GunzodusWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-chile" />;
}
