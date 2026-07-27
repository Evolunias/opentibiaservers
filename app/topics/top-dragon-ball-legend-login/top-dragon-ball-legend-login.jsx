import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-login');
}

export default function TopDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-login" />;
}
