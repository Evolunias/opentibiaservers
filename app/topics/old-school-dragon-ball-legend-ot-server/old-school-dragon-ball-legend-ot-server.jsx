import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-ot-server');
}

export default function OldSchoolDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-ot-server" />;
}
