import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-discord');
}

export default function RealMapThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-discord" />;
}
