import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-europe');
}

export default function GunzodusWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-europe" />;
}
