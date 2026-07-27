import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-guide');
}

export default function NewAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-guide" />;
}
