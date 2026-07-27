import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-fresh-start-server');
}

export default function Gunzodus86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-fresh-start-server" />;
}
