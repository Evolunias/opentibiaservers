import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-guide');
}

export default function WithReviewsGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-guide" />;
}
