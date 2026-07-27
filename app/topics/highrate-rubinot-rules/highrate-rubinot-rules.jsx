import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-rules');
}

export default function HighrateRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-rules" />;
}
