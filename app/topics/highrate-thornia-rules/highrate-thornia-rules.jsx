import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-rules');
}

export default function HighrateThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-rules" />;
}
