import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-evo-server');
}

export default function Gunzodus86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-evo-server" />;
}
