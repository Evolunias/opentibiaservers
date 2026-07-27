import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-rules');
}

export default function HighrateCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-rules" />;
}
