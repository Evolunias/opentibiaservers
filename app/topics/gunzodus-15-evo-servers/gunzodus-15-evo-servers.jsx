import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-evo-servers');
}

export default function Gunzodus15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-evo-servers" />;
}
