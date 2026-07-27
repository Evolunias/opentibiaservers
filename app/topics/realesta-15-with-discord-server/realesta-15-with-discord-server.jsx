import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-with-discord-server');
}

export default function Realesta15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-with-discord-server" />;
}
