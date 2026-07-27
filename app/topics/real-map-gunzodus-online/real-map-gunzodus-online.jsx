import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-online');
}

export default function RealMapGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-online" />;
}
