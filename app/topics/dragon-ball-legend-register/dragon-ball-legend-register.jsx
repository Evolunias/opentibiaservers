import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-register');
}

export default function DragonBallLegendRegisterKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-register" />;
}
