import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-south-america');
}

export default function GunzodusRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-south-america" />;
}
