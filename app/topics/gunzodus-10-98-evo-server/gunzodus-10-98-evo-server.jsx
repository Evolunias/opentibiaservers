import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-evo-server');
}

export default function Gunzodus1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-evo-server" />;
}
