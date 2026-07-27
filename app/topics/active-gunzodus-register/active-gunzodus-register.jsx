import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-register');
}

export default function ActiveGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-register" />;
}
