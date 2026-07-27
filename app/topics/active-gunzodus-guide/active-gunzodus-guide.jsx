import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-guide');
}

export default function ActiveGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-guide" />;
}
