import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-guide');
}

export default function CurrentClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-guide" />;
}
