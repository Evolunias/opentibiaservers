import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-discord');
}

export default function RealMapCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-discord" />;
}
