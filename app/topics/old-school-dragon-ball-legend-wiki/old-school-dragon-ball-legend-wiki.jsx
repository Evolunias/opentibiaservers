import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-wiki');
}

export default function OldSchoolDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-wiki" />;
}
