import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-ot-server');
}

export default function HighrateRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-ot-server" />;
}
