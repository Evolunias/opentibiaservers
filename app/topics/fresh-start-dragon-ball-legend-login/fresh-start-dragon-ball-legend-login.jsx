import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-login');
}

export default function FreshStartDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-login" />;
}
