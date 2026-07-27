import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-france');
}

export default function RookgaardTalesWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-france" />;
}
