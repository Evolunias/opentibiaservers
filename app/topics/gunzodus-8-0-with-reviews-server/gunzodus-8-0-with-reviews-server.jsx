import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-with-reviews-server');
}

export default function Gunzodus80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-with-reviews-server" />;
}
