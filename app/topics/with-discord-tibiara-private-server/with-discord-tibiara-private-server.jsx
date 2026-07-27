import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-private-server');
}

export default function WithDiscordTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-private-server" />;
}
