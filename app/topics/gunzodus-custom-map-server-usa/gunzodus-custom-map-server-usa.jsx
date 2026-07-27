import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-usa');
}

export default function GunzodusCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-usa" />;
}
