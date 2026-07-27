import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-private-server');
}

export default function WithDiscordArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-private-server" />;
}
