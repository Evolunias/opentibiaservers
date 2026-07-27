import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-brazil');
}

export default function GunzodusWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-brazil" />;
}
