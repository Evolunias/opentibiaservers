import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-evo-servers');
}

export default function Gunzodus74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-evo-servers" />;
}
