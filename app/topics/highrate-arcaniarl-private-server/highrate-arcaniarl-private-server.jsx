import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-private-server');
}

export default function HighrateArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-private-server" />;
}
