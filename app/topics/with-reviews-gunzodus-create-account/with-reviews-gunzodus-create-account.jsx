import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-create-account');
}

export default function WithReviewsGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-create-account" />;
}
