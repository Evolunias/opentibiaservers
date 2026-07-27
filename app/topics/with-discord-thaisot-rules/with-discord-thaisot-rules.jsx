import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-rules');
}

export default function WithDiscordThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-rules" />;
}
