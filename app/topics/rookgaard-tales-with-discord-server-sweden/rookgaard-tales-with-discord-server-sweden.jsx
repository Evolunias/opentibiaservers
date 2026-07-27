import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-discord-server-sweden');
}

export default function RookgaardTalesWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-discord-server-sweden" />;
}
