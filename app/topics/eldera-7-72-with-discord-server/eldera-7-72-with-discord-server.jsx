import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-with-discord-server');
}

export default function Eldera772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-with-discord-server" />;
}
