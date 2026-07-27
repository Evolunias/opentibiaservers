import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-register');
}

export default function NoResetGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-register" />;
}
