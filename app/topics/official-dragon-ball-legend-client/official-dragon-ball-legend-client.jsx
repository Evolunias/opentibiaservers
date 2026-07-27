import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-client');
}

export default function OfficialDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-client" />;
}
