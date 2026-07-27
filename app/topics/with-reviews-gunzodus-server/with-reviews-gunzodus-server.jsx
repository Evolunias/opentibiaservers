import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-server');
}

export default function WithReviewsGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-server" />;
}
