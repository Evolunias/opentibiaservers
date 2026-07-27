import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-discord');
}

export default function RealMapDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-discord" />;
}
