import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-evo-servers');
}

export default function Gunzodus80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-evo-servers" />;
}
