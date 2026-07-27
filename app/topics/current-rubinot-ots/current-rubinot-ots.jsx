import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-ots');
}

export default function CurrentRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-ots" />;
}
