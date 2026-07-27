import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-brazil');
}

export default function GunzodusEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-brazil" />;
}
