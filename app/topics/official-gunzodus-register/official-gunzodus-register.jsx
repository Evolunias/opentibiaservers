import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-register');
}

export default function OfficialGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-register" />;
}
