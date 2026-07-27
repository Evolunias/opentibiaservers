import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-register');
}

export default function NewGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-register" />;
}
