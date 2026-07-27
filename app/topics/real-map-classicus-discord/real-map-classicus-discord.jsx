import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-discord');
}

export default function RealMapClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-discord" />;
}
