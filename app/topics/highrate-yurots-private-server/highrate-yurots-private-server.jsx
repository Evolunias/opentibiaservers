import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-private-server');
}

export default function HighrateYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-private-server" />;
}
