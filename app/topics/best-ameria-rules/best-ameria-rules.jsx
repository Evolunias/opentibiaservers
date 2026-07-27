import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-rules');
}

export default function BestAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-rules" />;
}
