import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-fresh-start-server');
}

export default function Gunzodus100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-fresh-start-server" />;
}
