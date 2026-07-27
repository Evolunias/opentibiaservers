import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-rules');
}

export default function TopNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-rules" />;
}
