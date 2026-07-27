import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-server');
}

export default function HighrateOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-server" />;
}
