import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-rules');
}

export default function HighrateClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-rules" />;
}
