import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-ots');
}

export default function BestCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-ots" />;
}
