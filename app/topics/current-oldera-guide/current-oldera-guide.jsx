import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-guide');
}

export default function CurrentOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-guide" />;
}
