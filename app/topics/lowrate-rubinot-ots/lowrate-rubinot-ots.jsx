import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-ots');
}

export default function LowrateRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-ots" />;
}
