import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-fresh-start-server');
}

export default function Gunzodus772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-fresh-start-server" />;
}
