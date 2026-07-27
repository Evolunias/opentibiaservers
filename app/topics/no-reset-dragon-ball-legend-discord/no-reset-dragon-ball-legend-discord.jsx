import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-discord');
}

export default function NoResetDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-discord" />;
}
