import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-rules');
}

export default function HighrateCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-rules" />;
}
