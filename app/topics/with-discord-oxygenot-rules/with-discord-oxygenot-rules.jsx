import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-rules');
}

export default function WithDiscordOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-rules" />;
}
