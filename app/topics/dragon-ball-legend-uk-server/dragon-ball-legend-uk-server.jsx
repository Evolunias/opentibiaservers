import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-uk-server');
}

export default function DragonBallLegendUkServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-uk-server" />;
}
