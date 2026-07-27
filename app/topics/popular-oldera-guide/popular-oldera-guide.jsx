import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-guide');
}

export default function PopularOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-guide" />;
}
