import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-usa');
}

export default function GunzodusRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-usa" />;
}
