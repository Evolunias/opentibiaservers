import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-fresh-start-server');
}

export default function Gunzodus80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-fresh-start-server" />;
}
