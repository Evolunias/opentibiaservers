import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-rules');
}

export default function CurrentYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-rules" />;
}
