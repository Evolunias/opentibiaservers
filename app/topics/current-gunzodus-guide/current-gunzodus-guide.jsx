import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-guide');
}

export default function CurrentGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-guide" />;
}
