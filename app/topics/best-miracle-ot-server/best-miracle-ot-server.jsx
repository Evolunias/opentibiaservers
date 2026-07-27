import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-ot-server');
}

export default function BestMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-ot-server" />;
}
