import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-discord');
}

export default function RealMapOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-discord" />;
}
