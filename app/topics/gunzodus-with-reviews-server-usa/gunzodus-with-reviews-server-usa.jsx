import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-usa');
}

export default function GunzodusWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-usa" />;
}
