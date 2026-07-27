import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-argentina');
}

export default function GunzodusRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-argentina" />;
}
