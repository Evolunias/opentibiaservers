import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-launcher');
}

export default function DragonBallLegendLauncherKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-launcher" />;
}
