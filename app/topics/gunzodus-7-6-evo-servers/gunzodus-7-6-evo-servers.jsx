import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-evo-servers');
}

export default function Gunzodus76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-evo-servers" />;
}
