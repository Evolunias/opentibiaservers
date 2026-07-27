import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-with-discord-server');
}

export default function Eldera81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-with-discord-server" />;
}
