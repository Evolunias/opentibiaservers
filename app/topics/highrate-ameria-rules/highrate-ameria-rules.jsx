import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-rules');
}

export default function HighrateAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-rules" />;
}
