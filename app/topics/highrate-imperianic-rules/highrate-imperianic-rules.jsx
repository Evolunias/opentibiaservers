import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-rules');
}

export default function HighrateImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-rules" />;
}
