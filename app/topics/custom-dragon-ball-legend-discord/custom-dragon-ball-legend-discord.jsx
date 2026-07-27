import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-discord');
}

export default function CustomDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-discord" />;
}
