import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-france');
}

export default function GunzodusCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-france" />;
}
