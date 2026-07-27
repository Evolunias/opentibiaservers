import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-discord');
}

export default function RealMapXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-discord" />;
}
