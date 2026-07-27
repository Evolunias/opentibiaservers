import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-usa');
}

export default function GunzodusNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-usa" />;
}
