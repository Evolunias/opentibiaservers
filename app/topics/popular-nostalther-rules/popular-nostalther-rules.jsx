import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-rules');
}

export default function PopularNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-rules" />;
}
