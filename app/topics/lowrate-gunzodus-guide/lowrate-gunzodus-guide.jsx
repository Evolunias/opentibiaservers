import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-guide');
}

export default function LowrateGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-guide" />;
}
