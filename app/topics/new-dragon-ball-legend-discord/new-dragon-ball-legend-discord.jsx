import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-discord');
}

export default function NewDragonBallLegendDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-discord" />;
}
