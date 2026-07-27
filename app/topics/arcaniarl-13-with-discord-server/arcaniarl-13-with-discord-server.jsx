import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-with-discord-server');
}

export default function Arcaniarl13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-with-discord-server" />;
}
