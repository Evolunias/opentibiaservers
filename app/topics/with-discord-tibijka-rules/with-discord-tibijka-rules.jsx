import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-rules');
}

export default function WithDiscordTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-rules" />;
}
