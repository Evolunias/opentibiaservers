import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-ot');
}

export default function BestCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-ot" />;
}
