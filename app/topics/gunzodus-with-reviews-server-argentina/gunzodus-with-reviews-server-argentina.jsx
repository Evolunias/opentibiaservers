import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-argentina');
}

export default function GunzodusWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-argentina" />;
}
