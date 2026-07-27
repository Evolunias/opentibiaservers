import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-ot-server');
}

export default function BestCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-ot-server" />;
}
