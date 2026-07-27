import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-website');
}

export default function ActiveDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-website" />;
}
