import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-guide');
}

export default function CustomNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-guide" />;
}
