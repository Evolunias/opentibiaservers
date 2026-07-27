import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-evo-server');
}

export default function Gunzodus74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-evo-server" />;
}
