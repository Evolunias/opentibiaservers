import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-with-discord-server');
}

export default function Realesta81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-with-discord-server" />;
}
