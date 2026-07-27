import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-guide');
}

export default function TopGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-guide" />;
}
