import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-france');
}

export default function GunzodusNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-france" />;
}
