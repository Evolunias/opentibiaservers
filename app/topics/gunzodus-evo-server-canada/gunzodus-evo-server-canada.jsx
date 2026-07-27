import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-canada');
}

export default function GunzodusEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-canada" />;
}
