import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-open-tibia');
}

export default function OldSchoolDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-open-tibia" />;
}
