import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-evo-servers');
}

export default function Gunzodus86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-evo-servers" />;
}
