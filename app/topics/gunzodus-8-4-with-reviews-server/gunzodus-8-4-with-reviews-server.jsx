import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-with-reviews-server');
}

export default function Gunzodus84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-with-reviews-server" />;
}
