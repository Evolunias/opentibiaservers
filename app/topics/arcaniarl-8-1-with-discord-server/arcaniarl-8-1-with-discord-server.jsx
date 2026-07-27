import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-with-discord-server');
}

export default function Arcaniarl81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-with-discord-server" />;
}
