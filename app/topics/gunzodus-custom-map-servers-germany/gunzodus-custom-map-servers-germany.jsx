import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-germany');
}

export default function GunzodusCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-germany" />;
}
