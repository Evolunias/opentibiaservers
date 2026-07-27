import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-uk');
}

export default function RookgaardTalesWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-uk" />;
}
