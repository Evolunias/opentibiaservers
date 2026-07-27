import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-with-discord-server');
}

export default function Thornia81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-with-discord-server" />;
}
