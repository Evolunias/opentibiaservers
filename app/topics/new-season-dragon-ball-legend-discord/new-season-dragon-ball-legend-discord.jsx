import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-discord');
}

export default function NewSeasonDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-discord" />;
}
