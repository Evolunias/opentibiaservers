import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-guide');
}

export default function FreshStartDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-guide" />;
}
