import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-poland');
}

export default function GunzodusEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-poland" />;
}
