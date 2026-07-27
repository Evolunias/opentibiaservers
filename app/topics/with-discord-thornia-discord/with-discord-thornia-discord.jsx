import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-discord');
}

export default function WithDiscordThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-discord" />;
}
