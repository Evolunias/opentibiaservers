import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-private-server');
}

export default function OldSchoolDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-private-server" />;
}
