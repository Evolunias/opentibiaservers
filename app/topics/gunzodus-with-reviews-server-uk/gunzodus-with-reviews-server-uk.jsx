import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-uk');
}

export default function GunzodusWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-uk" />;
}
