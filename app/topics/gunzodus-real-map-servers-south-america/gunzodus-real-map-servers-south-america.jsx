import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-south-america');
}

export default function GunzodusRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-south-america" />;
}
