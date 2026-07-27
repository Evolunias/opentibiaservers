import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-north-america');
}

export default function GunzodusNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-north-america" />;
}
