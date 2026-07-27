import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-6-with-discord-server');
}

export default function Thornia86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-6-with-discord-server" />;
}
