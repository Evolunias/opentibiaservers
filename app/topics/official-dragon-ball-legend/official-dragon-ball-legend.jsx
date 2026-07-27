import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend');
}

export default function OfficialDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend" />;
}
