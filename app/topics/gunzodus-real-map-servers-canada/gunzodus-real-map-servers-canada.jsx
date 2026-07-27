import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-canada');
}

export default function GunzodusRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-canada" />;
}
