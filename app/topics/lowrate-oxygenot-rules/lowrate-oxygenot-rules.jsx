import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-rules');
}

export default function LowrateOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-rules" />;
}
