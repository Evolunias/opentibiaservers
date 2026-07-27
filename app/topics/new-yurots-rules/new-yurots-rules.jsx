import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-rules');
}

export default function NewYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-rules" />;
}
