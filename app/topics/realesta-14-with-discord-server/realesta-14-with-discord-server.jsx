import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-with-discord-server');
}

export default function Realesta14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-with-discord-server" />;
}
