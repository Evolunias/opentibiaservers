import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-rules');
}

export default function WithDiscordKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-rules" />;
}
