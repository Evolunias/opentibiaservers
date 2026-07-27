import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-ot-server');
}

export default function HighrateYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-ot-server" />;
}
