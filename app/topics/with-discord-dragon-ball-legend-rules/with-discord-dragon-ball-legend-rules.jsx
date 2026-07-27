import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-rules');
}

export default function WithDiscordDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-rules" />;
}
