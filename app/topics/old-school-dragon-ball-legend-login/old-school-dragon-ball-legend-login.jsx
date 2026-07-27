import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-login');
}

export default function OldSchoolDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-login" />;
}
