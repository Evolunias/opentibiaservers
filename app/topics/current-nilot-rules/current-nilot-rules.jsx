import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-rules');
}

export default function CurrentNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-rules" />;
}
