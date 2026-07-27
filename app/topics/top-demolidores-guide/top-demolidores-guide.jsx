import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-guide');
}

export default function TopDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-guide" />;
}
