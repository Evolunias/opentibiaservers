import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-login');
}

export default function CustomDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-login" />;
}
