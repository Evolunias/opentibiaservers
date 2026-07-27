import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-evo-servers');
}

export default function Gunzodus12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-evo-servers" />;
}
