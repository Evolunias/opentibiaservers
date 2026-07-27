import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-guide');
}

export default function CurrentTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-guide" />;
}
