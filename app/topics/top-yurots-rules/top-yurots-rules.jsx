import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-rules');
}

export default function TopYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-rules" />;
}
