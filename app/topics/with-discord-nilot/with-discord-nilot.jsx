import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot');
}

export default function WithDiscordNilotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot" />;
}
