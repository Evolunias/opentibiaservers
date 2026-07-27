import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-guide');
}

export default function PopularNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-guide" />;
}
