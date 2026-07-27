import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-rules');
}

export default function HighrateXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-rules" />;
}
