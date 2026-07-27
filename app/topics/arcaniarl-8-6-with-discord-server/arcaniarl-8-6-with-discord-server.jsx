import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-with-discord-server');
}

export default function Arcaniarl86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-with-discord-server" />;
}
