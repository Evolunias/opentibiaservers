import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-client');
}

export default function WithReviewsGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-client" />;
}
