import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-private-server');
}

export default function HighrateOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-private-server" />;
}
