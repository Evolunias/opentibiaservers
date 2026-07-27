import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-mexico');
}

export default function GunzodusRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-mexico" />;
}
