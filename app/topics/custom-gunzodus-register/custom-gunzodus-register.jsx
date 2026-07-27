import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-register');
}

export default function CustomGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-register" />;
}
