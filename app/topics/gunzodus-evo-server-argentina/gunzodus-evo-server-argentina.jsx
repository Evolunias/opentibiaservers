import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-argentina');
}

export default function GunzodusEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-argentina" />;
}
