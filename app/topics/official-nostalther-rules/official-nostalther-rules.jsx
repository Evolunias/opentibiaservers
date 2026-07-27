import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-rules');
}

export default function OfficialNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-rules" />;
}
