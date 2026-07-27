import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-with-discord-server');
}

export default function Realesta100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-with-discord-server" />;
}
