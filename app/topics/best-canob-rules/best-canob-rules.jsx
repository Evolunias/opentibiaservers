import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-rules');
}

export default function BestCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="best-canob-rules" />;
}
