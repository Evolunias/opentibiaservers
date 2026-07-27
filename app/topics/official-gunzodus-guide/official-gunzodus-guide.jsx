import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-guide');
}

export default function OfficialGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-guide" />;
}
