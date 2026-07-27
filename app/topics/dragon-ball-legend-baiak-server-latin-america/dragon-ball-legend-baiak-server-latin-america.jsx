import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-latin-america');
}

export default function DragonBallLegendBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-latin-america" />;
}
