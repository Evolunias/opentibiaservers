import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-with-discord-server');
}

export default function Thornia14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-with-discord-server" />;
}
