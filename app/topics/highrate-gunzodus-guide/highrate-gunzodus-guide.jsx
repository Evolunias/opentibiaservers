import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-guide');
}

export default function HighrateGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-guide" />;
}
