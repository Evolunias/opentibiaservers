import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-usa');
}

export default function GunzodusNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-usa" />;
}
