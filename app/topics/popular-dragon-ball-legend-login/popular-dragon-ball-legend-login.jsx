import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-login');
}

export default function PopularDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-login" />;
}
