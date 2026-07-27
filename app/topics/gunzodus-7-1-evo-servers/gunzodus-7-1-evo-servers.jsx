import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-evo-servers');
}

export default function Gunzodus71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-evo-servers" />;
}
