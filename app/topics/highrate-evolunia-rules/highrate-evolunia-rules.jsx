import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-rules');
}

export default function HighrateEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-rules" />;
}
