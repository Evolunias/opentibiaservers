import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-with-discord-server');
}

export default function RookgaardTales12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-with-discord-server" />;
}
