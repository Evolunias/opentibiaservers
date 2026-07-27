import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-with-discord-server');
}

export default function RookgaardTales86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-with-discord-server" />;
}
