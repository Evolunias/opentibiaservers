import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-register');
}

export default function GunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-register" />;
}
