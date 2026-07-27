import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-rules');
}

export default function HighrateAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-rules" />;
}
