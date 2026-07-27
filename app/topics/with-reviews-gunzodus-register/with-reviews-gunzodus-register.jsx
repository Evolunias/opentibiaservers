import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-register');
}

export default function WithReviewsGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-register" />;
}
