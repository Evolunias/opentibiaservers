import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-ot');
}

export default function WithReviewsGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-ot" />;
}
