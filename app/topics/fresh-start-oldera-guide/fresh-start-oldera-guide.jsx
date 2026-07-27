import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-guide');
}

export default function FreshStartOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-guide" />;
}
