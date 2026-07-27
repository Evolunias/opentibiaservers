import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-france');
}

export default function GunzodusRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-france" />;
}
