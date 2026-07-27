import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-rules');
}

export default function ThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="thaisot-rules" />;
}
