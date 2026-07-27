import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-tibia');
}

export default function WithDiscordDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-tibia" />;
}
