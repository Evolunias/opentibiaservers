import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-rules');
}

export default function WithDiscordEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-rules" />;
}
