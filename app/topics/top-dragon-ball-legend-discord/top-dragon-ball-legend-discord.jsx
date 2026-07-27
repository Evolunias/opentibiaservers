import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-discord');
}

export default function TopDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-discord" />;
}
