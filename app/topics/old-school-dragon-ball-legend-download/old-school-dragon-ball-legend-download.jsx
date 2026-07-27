import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-download');
}

export default function OldSchoolDragonBallLegendDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-download" />;
}
