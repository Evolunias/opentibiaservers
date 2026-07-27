import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-with-discord-server');
}

export default function Arcaniarl74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-with-discord-server" />;
}
