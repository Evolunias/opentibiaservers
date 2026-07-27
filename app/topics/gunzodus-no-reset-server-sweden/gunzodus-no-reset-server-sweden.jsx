import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-sweden');
}

export default function GunzodusNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-sweden" />;
}
