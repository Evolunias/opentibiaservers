import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-with-reviews-server');
}

export default function Gunzodus71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-with-reviews-server" />;
}
