import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-rules');
}

export default function HighrateClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-rules" />;
}
