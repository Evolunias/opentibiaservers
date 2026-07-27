import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-discord');
}

export default function BestDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-discord" />;
}
