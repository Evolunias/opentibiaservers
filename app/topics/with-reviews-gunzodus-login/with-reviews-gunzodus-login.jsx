import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-login');
}

export default function WithReviewsGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-login" />;
}
