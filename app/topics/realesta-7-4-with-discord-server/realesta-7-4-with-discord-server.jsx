import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-with-discord-server');
}

export default function Realesta74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-with-discord-server" />;
}
