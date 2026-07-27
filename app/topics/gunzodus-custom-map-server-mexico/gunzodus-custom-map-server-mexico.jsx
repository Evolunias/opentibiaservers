import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-mexico');
}

export default function GunzodusCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-mexico" />;
}
