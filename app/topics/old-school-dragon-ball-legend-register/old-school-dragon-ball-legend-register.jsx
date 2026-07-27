import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-register');
}

export default function OldSchoolDragonBallLegendRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-register" />;
}
