import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-rules');
}

export default function WithDiscordMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-rules" />;
}
