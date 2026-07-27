import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-guide');
}

export default function CurrentKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-guide" />;
}
