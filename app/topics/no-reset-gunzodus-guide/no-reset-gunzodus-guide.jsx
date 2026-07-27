import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-guide');
}

export default function NoResetGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-guide" />;
}
