import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nostalther-rules');
}

export default function WithDiscordNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nostalther-rules" />;
}
