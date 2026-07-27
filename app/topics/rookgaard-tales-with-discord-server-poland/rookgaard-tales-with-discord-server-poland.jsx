import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-poland');
}

export default function RookgaardTalesWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-poland" />;
}
