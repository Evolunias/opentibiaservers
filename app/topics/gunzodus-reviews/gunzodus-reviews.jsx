import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-reviews');
}

export default function GunzodusReviewsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-reviews" />;
}
