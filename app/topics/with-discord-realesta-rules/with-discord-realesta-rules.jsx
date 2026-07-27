import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-rules');
}

export default function WithDiscordRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-rules" />;
}
