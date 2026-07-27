import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-evo-server');
}

export default function Gunzodus81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-evo-server" />;
}
