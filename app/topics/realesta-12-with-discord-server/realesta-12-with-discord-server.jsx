import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-with-discord-server');
}

export default function Realesta12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-with-discord-server" />;
}
