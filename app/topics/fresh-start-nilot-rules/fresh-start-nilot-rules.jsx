import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-rules');
}

export default function FreshStartNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-rules" />;
}
