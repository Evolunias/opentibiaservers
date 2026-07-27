import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-mexico');
}

export default function GunzodusCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-mexico" />;
}
