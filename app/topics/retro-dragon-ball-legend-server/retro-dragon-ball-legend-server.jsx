import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-dragon-ball-legend-server');
}

export default function RetroDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="retro-dragon-ball-legend-server" />;
}
