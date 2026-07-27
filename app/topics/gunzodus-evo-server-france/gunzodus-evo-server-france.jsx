import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-france');
}

export default function GunzodusEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-france" />;
}
