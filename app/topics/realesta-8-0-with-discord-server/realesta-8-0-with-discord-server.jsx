import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-with-discord-server');
}

export default function Realesta80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-with-discord-server" />;
}
