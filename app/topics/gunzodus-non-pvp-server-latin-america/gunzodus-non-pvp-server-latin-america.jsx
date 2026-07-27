import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-latin-america');
}

export default function GunzodusNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-latin-america" />;
}
