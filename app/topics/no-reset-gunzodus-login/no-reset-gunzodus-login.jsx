import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-login');
}

export default function NoResetGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-login" />;
}
