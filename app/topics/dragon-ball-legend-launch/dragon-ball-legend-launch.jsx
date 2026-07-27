import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-launch');
}

export default function DragonBallLegendLaunchKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-launch" />;
}
