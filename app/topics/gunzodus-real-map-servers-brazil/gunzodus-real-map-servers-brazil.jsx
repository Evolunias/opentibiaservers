import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-brazil');
}

export default function GunzodusRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-brazil" />;
}
