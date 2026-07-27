import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-with-discord-server');
}

export default function Eldera74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-with-discord-server" />;
}
