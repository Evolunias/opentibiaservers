import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-evo-servers');
}

export default function Gunzodus772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-evo-servers" />;
}
