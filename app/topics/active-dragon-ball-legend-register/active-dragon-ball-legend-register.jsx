import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-register');
}

export default function ActiveDragonBallLegendRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-register" />;
}
