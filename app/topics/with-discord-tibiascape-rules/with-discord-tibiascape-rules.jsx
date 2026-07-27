import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-rules');
}

export default function WithDiscordTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-rules" />;
}
