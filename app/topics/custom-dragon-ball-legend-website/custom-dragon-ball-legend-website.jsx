import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-website');
}

export default function CustomDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-website" />;
}
