import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-evo-server');
}

export default function Gunzodus15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-evo-server" />;
}
