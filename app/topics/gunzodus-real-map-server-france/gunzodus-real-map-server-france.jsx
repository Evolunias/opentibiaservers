import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-france');
}

export default function GunzodusRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-france" />;
}
