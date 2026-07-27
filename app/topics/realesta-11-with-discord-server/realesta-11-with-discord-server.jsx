import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-with-discord-server');
}

export default function Realesta11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-with-discord-server" />;
}
