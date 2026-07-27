import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-discord');
}

export default function RealMapGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-discord" />;
}
