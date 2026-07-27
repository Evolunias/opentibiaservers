import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-rules');
}

export default function NilotRulesKeywordPage() {
  return <StaticKeywordPage slug="nilot-rules" />;
}
