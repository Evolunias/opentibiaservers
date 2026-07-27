import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-ots');
}

export default function WithReviewsGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-ots" />;
}
