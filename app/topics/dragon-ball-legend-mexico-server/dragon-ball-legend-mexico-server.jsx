import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-mexico-server');
}

export default function DragonBallLegendMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-mexico-server" />;
}
