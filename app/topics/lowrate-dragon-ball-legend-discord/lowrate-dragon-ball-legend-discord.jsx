import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-discord');
}

export default function LowrateDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-discord" />;
}
