import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-evo-server');
}

export default function Gunzodus13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-evo-server" />;
}
