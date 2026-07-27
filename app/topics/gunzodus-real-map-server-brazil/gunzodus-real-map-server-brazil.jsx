import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-brazil');
}

export default function GunzodusRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-brazil" />;
}
