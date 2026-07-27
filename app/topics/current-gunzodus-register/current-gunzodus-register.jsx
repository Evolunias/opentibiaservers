import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-register');
}

export default function CurrentGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-register" />;
}
