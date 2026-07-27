import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-latin-america');
}

export default function GunzodusRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-latin-america" />;
}
