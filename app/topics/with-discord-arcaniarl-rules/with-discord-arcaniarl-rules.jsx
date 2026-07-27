import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-rules');
}

export default function WithDiscordArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-rules" />;
}
