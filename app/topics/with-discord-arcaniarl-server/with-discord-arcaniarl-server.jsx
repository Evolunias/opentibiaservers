import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-server');
}

export default function WithDiscordArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-server" />;
}
