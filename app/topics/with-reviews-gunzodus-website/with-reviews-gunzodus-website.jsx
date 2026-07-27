import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-gunzodus-website');
}

export default function WithReviewsGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-gunzodus-website" />;
}
