import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-discord');
}

export default function FreshStartDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-discord" />;
}
