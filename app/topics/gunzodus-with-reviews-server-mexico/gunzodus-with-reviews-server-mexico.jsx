import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-mexico');
}

export default function GunzodusWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-mexico" />;
}
