import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-with-reviews-server');
}

export default function Gunzodus15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-with-reviews-server" />;
}
