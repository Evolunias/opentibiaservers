import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-canada');
}

export default function GunzodusWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-canada" />;
}
