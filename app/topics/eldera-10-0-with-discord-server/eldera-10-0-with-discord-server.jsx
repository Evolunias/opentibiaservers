import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-with-discord-server');
}

export default function Eldera100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-with-discord-server" />;
}
