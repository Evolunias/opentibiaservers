import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-argentina');
}

export default function GunzodusNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-argentina" />;
}
