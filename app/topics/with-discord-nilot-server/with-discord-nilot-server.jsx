import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-server');
}

export default function WithDiscordNilotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-server" />;
}
