import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-south-america');
}

export default function GunzodusCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-south-america" />;
}
