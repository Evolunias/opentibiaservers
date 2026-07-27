import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-discord-france');
}

export default function RealMapDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-discord-france" />;
}
