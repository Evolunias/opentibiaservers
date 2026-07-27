import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-rules');
}

export default function HighrateOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-rules" />;
}
