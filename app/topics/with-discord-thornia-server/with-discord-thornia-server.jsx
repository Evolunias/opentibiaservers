import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-server');
}

export default function WithDiscordThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-server" />;
}
