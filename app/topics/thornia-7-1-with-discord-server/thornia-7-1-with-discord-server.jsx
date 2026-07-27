import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-with-discord-server');
}

export default function Thornia71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-with-discord-server" />;
}
