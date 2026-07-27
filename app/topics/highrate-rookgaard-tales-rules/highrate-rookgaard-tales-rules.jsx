import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-rules');
}

export default function HighrateRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-rules" />;
}
