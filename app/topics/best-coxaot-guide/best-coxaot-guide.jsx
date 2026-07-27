import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-guide');
}

export default function BestCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-guide" />;
}
