import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-review');
}

export default function GunzodusReviewKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-review" />;
}
