import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-evo-server');
}

export default function Gunzodus772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-evo-server" />;
}
