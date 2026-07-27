import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-ots');
}

export default function BestRubinotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-ots" />;
}
