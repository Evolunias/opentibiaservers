import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-fresh-start-server');
}

export default function Gunzodus11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-fresh-start-server" />;
}
