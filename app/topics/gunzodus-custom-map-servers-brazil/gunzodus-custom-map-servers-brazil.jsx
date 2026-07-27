import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-brazil');
}

export default function GunzodusCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-brazil" />;
}
