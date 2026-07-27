import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-website');
}

export default function OfficialDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-website" />;
}
