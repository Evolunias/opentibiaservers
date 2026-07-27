import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-rules');
}

export default function BestCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-rules" />;
}
