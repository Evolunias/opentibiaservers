import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-client');
}

export default function WithDiscordNilotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-client" />;
}
