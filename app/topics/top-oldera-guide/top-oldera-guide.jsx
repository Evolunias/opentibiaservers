import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-guide');
}

export default function TopOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-guide" />;
}
