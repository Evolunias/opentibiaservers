import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-with-discord-server');
}

export default function RookgaardTales84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-with-discord-server" />;
}
