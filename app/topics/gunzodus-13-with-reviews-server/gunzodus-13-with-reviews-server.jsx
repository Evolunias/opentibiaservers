import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-with-reviews-server');
}

export default function Gunzodus13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-with-reviews-server" />;
}
