import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend');
}

export default function NewDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend" />;
}
