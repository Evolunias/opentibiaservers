import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-rules');
}

export default function BestCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-rules" />;
}
