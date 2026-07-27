import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-germany');
}

export default function GunzodusEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-germany" />;
}
