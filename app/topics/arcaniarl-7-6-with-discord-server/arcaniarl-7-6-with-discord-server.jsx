import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-with-discord-server');
}

export default function Arcaniarl76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-with-discord-server" />;
}
