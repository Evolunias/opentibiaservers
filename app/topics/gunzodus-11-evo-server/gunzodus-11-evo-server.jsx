import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-evo-server');
}

export default function Gunzodus11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-evo-server" />;
}
