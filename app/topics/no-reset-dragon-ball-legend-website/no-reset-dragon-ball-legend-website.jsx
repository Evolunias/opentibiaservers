import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-website');
}

export default function NoResetDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-website" />;
}
