import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-discord');
}

export default function RealMapNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-discord" />;
}
