import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-guide');
}

export default function BestGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-guide" />;
}
