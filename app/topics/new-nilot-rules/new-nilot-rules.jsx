import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-rules');
}

export default function NewNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-rules" />;
}
