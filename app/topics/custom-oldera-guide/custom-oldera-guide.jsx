import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-guide');
}

export default function CustomOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-guide" />;
}
