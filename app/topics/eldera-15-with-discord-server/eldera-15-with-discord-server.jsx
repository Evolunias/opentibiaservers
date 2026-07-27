import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-with-discord-server');
}

export default function Eldera15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-with-discord-server" />;
}
