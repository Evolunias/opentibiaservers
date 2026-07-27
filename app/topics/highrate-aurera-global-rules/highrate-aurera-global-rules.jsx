import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-rules');
}

export default function HighrateAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-rules" />;
}
