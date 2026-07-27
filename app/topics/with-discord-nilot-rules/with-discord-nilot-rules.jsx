import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-rules');
}

export default function WithDiscordNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-rules" />;
}
