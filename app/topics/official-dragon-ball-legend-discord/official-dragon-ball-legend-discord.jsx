import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-discord');
}

export default function OfficialDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-discord" />;
}
