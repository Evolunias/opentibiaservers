import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend');
}

export default function DragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend" />;
}
