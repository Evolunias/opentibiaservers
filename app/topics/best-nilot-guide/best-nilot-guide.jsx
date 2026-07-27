import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-guide');
}

export default function BestNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-guide" />;
}
