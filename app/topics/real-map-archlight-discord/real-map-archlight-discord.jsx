import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-discord');
}

export default function RealMapArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-discord" />;
}
