import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-germany');
}

export default function GunzodusRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-germany" />;
}
