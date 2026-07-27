import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-argentina');
}

export default function GunzodusCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-argentina" />;
}
