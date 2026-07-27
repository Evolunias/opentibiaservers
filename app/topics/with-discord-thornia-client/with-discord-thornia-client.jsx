import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-client');
}

export default function WithDiscordThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-client" />;
}
