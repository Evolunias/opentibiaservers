import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-official');
}

export default function RealMapGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-official" />;
}
