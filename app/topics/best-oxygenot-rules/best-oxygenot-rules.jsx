import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-rules');
}

export default function BestOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-rules" />;
}
