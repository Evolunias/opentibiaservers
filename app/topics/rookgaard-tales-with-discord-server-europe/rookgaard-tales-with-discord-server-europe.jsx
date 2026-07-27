import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-europe');
}

export default function RookgaardTalesWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-europe" />;
}
