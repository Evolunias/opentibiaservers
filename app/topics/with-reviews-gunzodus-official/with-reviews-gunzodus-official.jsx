import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-official');
}

export default function WithReviewsGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-official" />;
}
