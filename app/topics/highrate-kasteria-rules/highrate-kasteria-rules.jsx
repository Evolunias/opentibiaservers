import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-rules');
}

export default function HighrateKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-rules" />;
}
