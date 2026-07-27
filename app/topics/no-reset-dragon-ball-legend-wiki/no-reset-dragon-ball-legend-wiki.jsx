import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-wiki');
}

export default function NoResetDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-wiki" />;
}
