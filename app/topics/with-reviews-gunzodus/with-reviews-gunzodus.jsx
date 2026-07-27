import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus');
}

export default function WithReviewsGunzodusKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus" />;
}
