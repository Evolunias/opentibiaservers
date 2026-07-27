import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-fresh-start-server');
}

export default function Gunzodus12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-fresh-start-server" />;
}
