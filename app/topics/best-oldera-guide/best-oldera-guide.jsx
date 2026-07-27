import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-guide');
}

export default function BestOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-guide" />;
}
