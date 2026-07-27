import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-login');
}

export default function NewDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-login" />;
}
