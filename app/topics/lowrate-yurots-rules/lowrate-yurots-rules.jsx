import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-rules');
}

export default function LowrateYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-rules" />;
}
