import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-register');
}

export default function PopularDragonBallLegendRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-register" />;
}
