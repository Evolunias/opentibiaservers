import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-argentina');
}

export default function GunzodusCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-argentina" />;
}
