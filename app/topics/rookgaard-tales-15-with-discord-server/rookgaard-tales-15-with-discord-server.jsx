import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-with-discord-server');
}

export default function RookgaardTales15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-with-discord-server" />;
}
