import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-screenshots');
}

export default function DragonBallLegendScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-screenshots" />;
}
