import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-with-discord-server');
}

export default function Thornia12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-with-discord-server" />;
}
