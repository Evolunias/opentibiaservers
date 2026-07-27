import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-uk');
}

export default function GunzodusEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-uk" />;
}
