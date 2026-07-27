import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-with-discord-server');
}

export default function Thornia1098WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-with-discord-server" />;
}
