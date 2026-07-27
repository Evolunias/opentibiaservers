import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-germany');
}

export default function RookgaardTalesWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-germany" />;
}
