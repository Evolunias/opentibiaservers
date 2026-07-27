import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-discord');
}

export default function RealMapDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-discord" />;
}
