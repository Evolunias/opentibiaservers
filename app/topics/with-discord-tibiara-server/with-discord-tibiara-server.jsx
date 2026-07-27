import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-server');
}

export default function WithDiscordTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-server" />;
}
