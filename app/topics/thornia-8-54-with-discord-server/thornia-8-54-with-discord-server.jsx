import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-with-discord-server');
}

export default function Thornia854WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-with-discord-server" />;
}
