import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-north-america');
}

export default function GunzodusWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-north-america" />;
}
