import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-rules');
}

export default function WithDiscordMarolaotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-rules" />;
}
