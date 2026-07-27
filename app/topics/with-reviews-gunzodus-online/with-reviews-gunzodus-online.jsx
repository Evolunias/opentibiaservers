import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-online');
}

export default function WithReviewsGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-online" />;
}
