import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-rules');
}

export default function BestAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-rules" />;
}
