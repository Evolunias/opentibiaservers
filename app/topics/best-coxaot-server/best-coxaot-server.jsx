import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-server');
}

export default function BestCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-server" />;
}
