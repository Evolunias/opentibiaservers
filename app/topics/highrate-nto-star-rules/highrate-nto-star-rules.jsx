import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-rules');
}

export default function HighrateNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-rules" />;
}
