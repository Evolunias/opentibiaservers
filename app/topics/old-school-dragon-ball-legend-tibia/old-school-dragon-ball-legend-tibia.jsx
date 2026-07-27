import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-tibia');
}

export default function OldSchoolDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-tibia" />;
}
