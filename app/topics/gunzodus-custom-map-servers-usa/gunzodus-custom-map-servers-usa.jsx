import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-usa');
}

export default function GunzodusCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-usa" />;
}
