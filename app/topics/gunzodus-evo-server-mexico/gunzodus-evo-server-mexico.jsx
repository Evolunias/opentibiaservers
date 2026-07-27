import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-mexico');
}

export default function GunzodusEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-mexico" />;
}
