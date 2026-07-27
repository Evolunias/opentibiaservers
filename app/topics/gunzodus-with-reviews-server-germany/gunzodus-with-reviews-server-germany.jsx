import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-germany');
}

export default function GunzodusWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-germany" />;
}
