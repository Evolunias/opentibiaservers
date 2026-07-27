import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-rules');
}

export default function BestThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-rules" />;
}
