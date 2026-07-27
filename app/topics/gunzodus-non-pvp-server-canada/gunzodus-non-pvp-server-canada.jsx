import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-canada');
}

export default function GunzodusNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-canada" />;
}
