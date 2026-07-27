import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-rules');
}

export default function NewThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-rules" />;
}
