import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-argentina');
}

export default function RealMapDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-argentina" />;
}
