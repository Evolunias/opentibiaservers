import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-usa');
}

export default function RookgaardTalesWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-usa" />;
}
