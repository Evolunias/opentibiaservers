import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-rules');
}

export default function WithDiscordCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-rules" />;
}
