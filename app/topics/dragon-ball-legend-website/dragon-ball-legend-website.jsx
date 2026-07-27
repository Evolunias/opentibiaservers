import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-website');
}

export default function DragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-website" />;
}
