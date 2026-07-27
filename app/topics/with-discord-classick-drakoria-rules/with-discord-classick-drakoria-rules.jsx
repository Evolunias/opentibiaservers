import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-rules');
}

export default function WithDiscordClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-rules" />;
}
