import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-evo-server');
}

export default function Gunzodus80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-evo-server" />;
}
