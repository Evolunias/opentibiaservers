import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-rules');
}

export default function PopularYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-rules" />;
}
