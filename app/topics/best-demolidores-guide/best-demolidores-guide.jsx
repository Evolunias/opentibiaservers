import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-guide');
}

export default function BestDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-guide" />;
}
