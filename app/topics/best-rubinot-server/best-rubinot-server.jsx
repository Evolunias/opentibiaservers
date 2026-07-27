import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-server');
}

export default function BestRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-server" />;
}
