import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-evo-servers');
}

export default function Gunzodus14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-evo-servers" />;
}
