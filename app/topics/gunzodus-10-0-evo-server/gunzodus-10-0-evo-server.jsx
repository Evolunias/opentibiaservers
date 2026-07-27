import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-evo-server');
}

export default function Gunzodus100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-evo-server" />;
}
