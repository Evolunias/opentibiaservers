import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-fresh-start-server');
}

export default function Gunzodus14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-fresh-start-server" />;
}
