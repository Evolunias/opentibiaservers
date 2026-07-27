import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-ots');
}

export default function HighrateRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-ots" />;
}
