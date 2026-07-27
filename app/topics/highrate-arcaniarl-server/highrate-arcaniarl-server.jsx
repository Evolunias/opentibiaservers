import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-server');
}

export default function HighrateArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-server" />;
}
