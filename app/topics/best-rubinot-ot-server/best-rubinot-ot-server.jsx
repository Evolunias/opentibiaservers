import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-ot-server');
}

export default function BestRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-ot-server" />;
}
