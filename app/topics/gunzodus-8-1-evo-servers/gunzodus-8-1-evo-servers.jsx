import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-evo-servers');
}

export default function Gunzodus81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-evo-servers" />;
}
