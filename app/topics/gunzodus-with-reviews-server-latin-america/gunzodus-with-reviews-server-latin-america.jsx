import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-latin-america');
}

export default function GunzodusWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-latin-america" />;
}
