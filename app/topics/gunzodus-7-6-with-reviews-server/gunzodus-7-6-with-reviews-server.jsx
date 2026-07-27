import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-with-reviews-server');
}

export default function Gunzodus76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-with-reviews-server" />;
}
