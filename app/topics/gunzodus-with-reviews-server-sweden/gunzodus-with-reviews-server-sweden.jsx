import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-reviews-server-sweden');
}

export default function GunzodusWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-reviews-server-sweden" />;
}
