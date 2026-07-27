import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-fresh-start-server');
}

export default function Gunzodus13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-fresh-start-server" />;
}
