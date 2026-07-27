import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-login');
}

export default function ActiveDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-login" />;
}
