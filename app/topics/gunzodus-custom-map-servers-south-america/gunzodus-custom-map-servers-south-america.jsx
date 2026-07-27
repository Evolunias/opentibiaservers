import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-south-america');
}

export default function GunzodusCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-south-america" />;
}
