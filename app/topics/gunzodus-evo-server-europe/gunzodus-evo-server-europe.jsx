import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-europe');
}

export default function GunzodusEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-europe" />;
}
