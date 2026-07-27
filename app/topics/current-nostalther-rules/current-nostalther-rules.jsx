import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-rules');
}

export default function CurrentNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-rules" />;
}
