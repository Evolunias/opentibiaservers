import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-servers-brazil');
}

export default function GunzodusEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-servers-brazil" />;
}
