import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-rules');
}

export default function FreshStartOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-rules" />;
}
