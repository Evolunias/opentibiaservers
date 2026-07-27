import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-website');
}

export default function NewDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-website" />;
}
