import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-evo-servers');
}

export default function Gunzodus96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-evo-servers" />;
}
