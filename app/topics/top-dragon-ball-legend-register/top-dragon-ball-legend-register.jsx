import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-register');
}

export default function TopDragonBallLegendRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-register" />;
}
