import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-rules');
}

export default function NewNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-rules" />;
}
