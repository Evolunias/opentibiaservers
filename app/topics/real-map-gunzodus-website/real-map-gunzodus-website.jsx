import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-website');
}

export default function RealMapGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-website" />;
}
