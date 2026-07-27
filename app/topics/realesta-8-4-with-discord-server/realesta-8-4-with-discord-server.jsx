import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-4-with-discord-server');
}

export default function Realesta84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-4-with-discord-server" />;
}
