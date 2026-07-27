import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-with-discord-server');
}

export default function RookgaardTales14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-with-discord-server" />;
}
