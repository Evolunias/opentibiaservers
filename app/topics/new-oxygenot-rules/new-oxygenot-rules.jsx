import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-rules');
}

export default function NewOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-rules" />;
}
