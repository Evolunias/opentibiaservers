import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-login');
}

export default function OfficialDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-login" />;
}
