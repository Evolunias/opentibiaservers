import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-argentina');
}

export default function GunzodusNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-argentina" />;
}
