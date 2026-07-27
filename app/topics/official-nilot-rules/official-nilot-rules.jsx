import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-rules');
}

export default function OfficialNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-rules" />;
}
