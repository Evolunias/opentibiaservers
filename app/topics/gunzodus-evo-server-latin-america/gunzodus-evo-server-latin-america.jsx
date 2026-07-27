import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-latin-america');
}

export default function GunzodusEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-latin-america" />;
}
