import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-rules');
}

export default function WithDiscordYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-rules" />;
}
