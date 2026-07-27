import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-guide');
}

export default function WithDiscordNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-guide" />;
}
