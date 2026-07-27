import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-rules');
}

export default function HighrateElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-rules" />;
}
