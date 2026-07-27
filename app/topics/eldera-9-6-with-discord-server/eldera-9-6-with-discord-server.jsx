import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-with-discord-server');
}

export default function Eldera96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-with-discord-server" />;
}
