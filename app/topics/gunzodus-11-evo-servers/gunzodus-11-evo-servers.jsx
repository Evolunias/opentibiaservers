import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-evo-servers');
}

export default function Gunzodus11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-evo-servers" />;
}
