import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-rules');
}

export default function WithDiscordSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-rules" />;
}
