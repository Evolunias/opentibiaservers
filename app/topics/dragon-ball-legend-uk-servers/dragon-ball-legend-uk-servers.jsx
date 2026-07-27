import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-uk-servers');
}

export default function DragonBallLegendUkServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-uk-servers" />;
}
