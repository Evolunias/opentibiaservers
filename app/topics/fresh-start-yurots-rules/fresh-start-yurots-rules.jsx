import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-rules');
}

export default function FreshStartYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-rules" />;
}
