import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-website');
}

export default function OldSchoolDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-website" />;
}
