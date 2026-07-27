import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-mexico');
}

export default function GunzodusNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-mexico" />;
}
