import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-ot-server');
}

export default function HighrateArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-ot-server" />;
}
