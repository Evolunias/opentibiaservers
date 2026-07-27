import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-fresh-start-server');
}

export default function Gunzodus15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-fresh-start-server" />;
}
