import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-france');
}

export default function GunzodusCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-france" />;
}
