import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-register');
}

export default function OfficialDragonBallLegendRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-register" />;
}
