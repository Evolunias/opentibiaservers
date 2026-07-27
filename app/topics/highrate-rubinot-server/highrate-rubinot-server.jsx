import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-server');
}

export default function HighrateRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-server" />;
}
