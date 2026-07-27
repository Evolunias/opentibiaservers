import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-guide');
}

export default function DemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="demolidores-guide" />;
}
