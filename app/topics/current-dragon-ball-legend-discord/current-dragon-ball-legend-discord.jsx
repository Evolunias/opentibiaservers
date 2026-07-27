import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-discord');
}

export default function CurrentDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-discord" />;
}
