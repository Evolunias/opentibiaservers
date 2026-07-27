import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-guide');
}

export default function PopularDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-guide" />;
}
