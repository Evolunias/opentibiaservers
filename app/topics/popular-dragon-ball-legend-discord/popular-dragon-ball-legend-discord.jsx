import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-discord');
}

export default function PopularDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-discord" />;
}
