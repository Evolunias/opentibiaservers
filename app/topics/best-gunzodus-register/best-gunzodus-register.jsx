import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-register');
}

export default function BestGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-register" />;
}
