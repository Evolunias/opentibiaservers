import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-germany');
}

export default function GunzodusCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-germany" />;
}
