import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-guide');
}

export default function CurrentDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-guide" />;
}
