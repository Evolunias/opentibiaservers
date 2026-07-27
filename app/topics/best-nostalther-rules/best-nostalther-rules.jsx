import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-rules');
}

export default function BestNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-rules" />;
}
