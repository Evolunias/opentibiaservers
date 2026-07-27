import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-guide');
}

export default function NilotGuideKeywordPage() {
  return <StaticKeywordPage slug="nilot-guide" />;
}
