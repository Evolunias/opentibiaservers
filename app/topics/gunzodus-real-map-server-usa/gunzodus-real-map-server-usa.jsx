import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-usa');
}

export default function GunzodusRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-usa" />;
}
