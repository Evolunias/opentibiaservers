import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-rules');
}

export default function CurrentOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-rules" />;
}
