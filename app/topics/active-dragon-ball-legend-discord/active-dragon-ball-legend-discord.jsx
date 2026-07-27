import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-discord');
}

export default function ActiveDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-discord" />;
}
