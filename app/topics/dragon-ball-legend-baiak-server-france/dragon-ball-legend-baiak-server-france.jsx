import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-baiak-server-france');
}

export default function DragonBallLegendBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-baiak-server-france" />;
}
