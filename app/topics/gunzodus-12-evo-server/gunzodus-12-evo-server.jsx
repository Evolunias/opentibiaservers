import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-evo-server');
}

export default function Gunzodus12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-evo-server" />;
}
