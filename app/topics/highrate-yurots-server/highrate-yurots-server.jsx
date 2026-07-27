import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-server');
}

export default function HighrateYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-server" />;
}
