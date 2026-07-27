import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-with-discord-server');
}

export default function Realesta71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-with-discord-server" />;
}
