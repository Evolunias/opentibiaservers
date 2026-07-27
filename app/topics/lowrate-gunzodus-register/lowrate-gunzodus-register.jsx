import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-register');
}

export default function LowrateGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-register" />;
}
