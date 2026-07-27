import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend');
}

export default function CustomDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend" />;
}
