import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-with-discord-server');
}

export default function Realesta96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-with-discord-server" />;
}
