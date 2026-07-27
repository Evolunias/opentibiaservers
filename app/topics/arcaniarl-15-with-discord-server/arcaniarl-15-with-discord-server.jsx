import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-with-discord-server');
}

export default function Arcaniarl15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-with-discord-server" />;
}
