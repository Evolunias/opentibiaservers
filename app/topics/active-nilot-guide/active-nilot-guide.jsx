import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-guide');
}

export default function ActiveNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-guide" />;
}
